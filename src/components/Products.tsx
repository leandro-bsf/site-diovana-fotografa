import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
} from "../components/ui/dialog";


// Carrega automaticamente imagens das pastas de produtos
const images = import.meta.glob(
  "../assets/produtos/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  {
    eager: true,
    import: "default",
  }
) as Record<string, string>;


// Busca imagens de uma pasta específica
function getImages(folder: string) {
  return Object.entries(images)
    .filter(([path]) =>
      path
        .replaceAll("\\", "/")
        .includes(`/produtos/${folder}/`)
    )
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, image]) => image);
}



const products = [

  {
    folder: "produto1",
    category: "Álbuns",
    title: "Álbum Premium",
    description:
      "Álbum fotográfico de alta qualidade com acabamento premium para eternizar seus momentos.",
    price: "A partir de R$ 690,00",
  },


  {
    folder: "produto2",
    category: "Álbuns",
    title: "Álbum Luxo",
    description:
      "Um álbum sofisticado com acabamento exclusivo e materiais de alta durabilidade.",
    price: "A partir de R$ 990,00",
  },


  {
    folder: "produto3",
    category: "Caixas",
    title: "Caixa Personalizada",
    description:
      "Caixa personalizada para guardar fotografias e lembranças especiais.",
    price: "A partir de R$ 250,00",
  },


  {
    folder: "produto4",
    category: "Quadros",
    title: "Quadro Decorativo",
    description:
      "Transforme suas fotos favoritas em peças únicas para decorar seu ambiente.",
    price: "A partir de R$ 180,00",
  },

];



export function Products() {


  const [selectedCategory, setSelectedCategory] =
    useState("Todos");


  const [selectedProduct, setSelectedProduct] =
    useState<any>(null);


  const [currentImage, setCurrentImage] =
    useState(0);



  const categories = useMemo(() => {

    return [
      "Todos",
      ...new Set(
        products.map(
          product => product.category
        )
      )
    ];

  }, []);



  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter(
          product =>
            product.category === selectedCategory
        );




  function openProduct(product:any){

    setSelectedProduct(product);
    setCurrentImage(0);

  }




  function nextImage(){

    const productImages =
      getImages(selectedProduct.folder);


    setCurrentImage(
      currentImage === productImages.length - 1
        ? 0
        : currentImage + 1
    );

  }




  function previousImage(){

    const productImages =
      getImages(selectedProduct.folder);


    setCurrentImage(
      currentImage === 0
        ? productImages.length - 1
        : currentImage - 1
    );

  }




  return (

<section
id="produtos"
className="py-24 md:py-32 bg-background"
>


<div className="max-w-7xl mx-auto px-6">



{/* Cabeçalho */}

<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.7
}}

className="text-center mb-16"

>


<span className="
text-accent
uppercase
tracking-[0.2em]
text-sm
font-medium
">

Produtos

</span>



<h2 className="
font-display
text-3xl
md:text-5xl
mt-4
">

Produtos para eternizar momentos

</h2>



<div className="
w-16
h-px
bg-accent
mx-auto
mt-6
"/>


</motion.div>





<div className="
grid
lg:grid-cols-[230px_1fr]
gap-10
">





{/* MENU CATEGORIAS */}


<aside
className="
h-fit
lg:sticky
lg:top-24
"
>


<h3 className="
font-semibold
text-lg
mb-5
">

Categorias

</h3>



<div className="space-y-2">


{
categories.map(category=>{


const total =
category === "Todos"
?
products.length
:
products.filter(
p=>p.category===category
).length;



return (

<button

key={category}

onClick={()=>setSelectedCategory(category)}

className={`
w-full
flex
justify-between
items-center
rounded-xl
px-4
py-3
transition

${
selectedCategory===category
?
"bg-accent text-white"
:
"hover:bg-muted"
}

`}

>


<span>
{category}
</span>


<span className="
text-xs
opacity-80
">

{total}

</span>


</button>

)


})

}


</div>


</aside>





{/* GRID PRODUTOS */}


<div className="
grid
md:grid-cols-2
gap-8
">



{
filteredProducts.map(
(product,index)=>{


const productImages =
getImages(product.folder);



return (

<motion.div

key={product.folder}

onClick={() =>
openProduct(product)
}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*.1
}}

className="
cursor-pointer
bg-card
border
border-border
rounded-2xl
overflow-hidden
shadow-sm
hover:shadow-xl
transition
"


>


<div className="p-4">


<img

src={productImages[0]}

alt={product.title}

className="
w-full
h-72
object-cover
rounded-xl
"

/>


</div>



<div className="px-6 pb-6">


<span className="
text-xs
bg-accent/10
text-accent
px-3
py-1
rounded-full
font-semibold
">

{product.category}

</span>



<h3 className="
font-display
text-2xl
mt-4
">

{product.title}

</h3>



<p className="
text-muted-foreground
text-sm
mt-3
line-clamp-3
">

{product.description}

</p>



<strong className="
block
text-2xl
text-accent
mt-5
">

{product.price}

</strong>



</div>


</motion.div>


)


}

)

}



</div>



</div>


</div>





{/* MODAL */}

<Dialog

open={!!selectedProduct}

onOpenChange={()=>
setSelectedProduct(null)
}

>


<DialogContent
className="
max-w-5xl
p-0
overflow-hidden
"
>


{
selectedProduct && (


<div className="
grid
md:grid-cols-2
"
>



{/* CARROSSEL */}


<div className="
relative
bg-black
flex
items-center
"
>


<img

src={
getImages(selectedProduct.folder)
[currentImage]
}

alt={selectedProduct.title}

className="
w-full
h-[600px]
object-contain
"

/>



{
getImages(selectedProduct.folder).length > 1 &&

<>


<button

onClick={previousImage}

className="
absolute
left-4
bg-white/20
text-white
rounded-full
p-3
"

>

<ChevronLeft/>

</button>



<button

onClick={nextImage}

className="
absolute
right-4
bg-white/20
text-white
rounded-full
p-3
"

>

<ChevronRight/>

</button>


</>

}



</div>





{/* INFORMAÇÕES */}


<div className="
p-8
flex
flex-col
justify-center
">


<span className="
text-accent
text-sm
font-semibold
">

{selectedProduct.category}

</span>



<h2 className="
font-display
text-4xl
mt-4
">

{selectedProduct.title}

</h2>



<p className="
text-muted-foreground
leading-7
mt-5
">

{selectedProduct.description}

</p>



<strong className="
text-4xl
text-accent
mt-8
">

{selectedProduct.price}

</strong>



<button

className="
mt-8
bg-accent
text-white
rounded-full
px-8
py-3
"

>

Solicitar orçamento

</button>


</div>


</div>


)

}


</DialogContent>


</Dialog>



</section>

  );

}