import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
} from "../components/ui/dialog";


// Carrega automaticamente imagens das pastas de produtos
const images = import.meta.glob(
  "../assets/produtos/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP,jfif}",
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
    title: "Albun Dreambook - Tecido",
    description:
      "Este álbum apresenta capa e estojo revestidos em tecido especial Dream Dourado, acompanhando placa com gravação a laser e sendo composto por até 45 lâminas (equivalentes a 90 páginas) em papel fotográfico profissional com gramatura de 800g/m², utilizando cartão branco entre as lâminas e acabamento com laminação em verniz UV brilho ou fosco.",
    price: "A partir de R$ 500,00",
  },


  {
    folder: "produto2",
    category: "Álbuns",
    title: "Albun Dreambook - Foto",
    description:
      "Este modelo inclui estojo com base em tecido especial Dream Dourado e tampa fotográfica, apresentando álbum com capa frontal fotográfica e dorso/verso em tecido especial Dream Dourado, composto por até 45 lâminas (90 páginas) impressas em papel fotográfico profissional com gramatura de 800g/m², utilizando cartão branco entre as lâminas e acabamento com laminação em verniz UV brilho ou fosco.",
    price: "A partir de R$ 400,00",
  },


  {
    folder: "produto3",
    category: "Álbuns",
    title: "Álbum Almofadado",
    description:
      "Este modelo possui capa 100% fotográfica almofadada e é composto por até 45 lâminas (equivalentes a 90 páginas) impressas em papel fotográfico profissional com gramatura de 800g/m², utilizando cartão branco entre as lâminas e acabamento com laminação em verniz UV brilho ou fosco.",
    price: "A partir de R$ 250,00",
  },


  {
    folder: "produto4",
    category: "Personalizados",
    title: "Caneca Personalizada",
    description:
      "Caneca Porcelana Personalizada 325ml",
    price: "A partir de R$ 180,00",
  },
  
  {
    folder: "produto5",
    category: "Personalizados",
    title: "Camiseta Personalizada Poliester",
    description:
      "Camiseta Personalizada 100% Poliester , use sua criatividade, presenteie quem você ama!! Camisetas estampadas com Foto : R$ 39,90 Camisetas Somente Texto : R$ 43,00 , Tamanhos para toda a família: Infantil: 4 ao 14 - Adulto: P ao XG",
    price: "A partir de R$ 180,00",
  },
  
  {
    folder: "produto6",
    category: "Personalizados",
    title: "Banner Pró sem trama",
    description:
      "Banner Pró sem trama ",
    price: "A partir de R$ 180,00",
  },
  
  {
    folder: "produto7",
    category: "Álbuns",
    title: "Álbum Econômico",
    description:
      "Este modelo possui capa 100% fotográfica com estrutura interna em cartão de 2 mm e é composto por até 18 lâminas (equivalentes a 36 páginas) impressas em papel fotográfico profissional com gramatura de 800g/m², utilizando cartão cinza entre as lâminas e acabamento com laminação em verniz UV brilho ou fosco.",
    price: "A partir de R$ 180,00",
  },
  
  {
    folder: "produto8",
    category: "Álbuns",
    title: "Albun Kit Econômico",
    description:
      "Este álbum, que já inclui estojo revestido em courino disponível em quatro cores exclusivas, apresenta capa 100% fotográfica com estrutura interna em cartão de 2 mm e é composto por até 18 lâminas (equivalentes a 36 páginas) impressas em papel fotográfico profissional com gramatura de 800g/m², utilizando cartão cinza entre as lâminas e acabamento com laminação em verniz UV brilho ou fosco.",
    price: "A partir de R$ 180,00",
  },
  
  {
    folder: "produto9",
    category: "Álbuns",
    title: "Albun Premium Bordado",
    description:
      "Este modelo possui capa com estrutura interna em MDF de 3 mm, revestimento em courino ou tecido com gravação em bordado, e é composto por até 45 lâminas (equivalentes a 90 páginas) impressas em papel fotográfico profissional com gramatura de 800g/m², utilizando cartão branco entre as lâminas e acabamento com laminação em verniz UV brilho ou fosco.",
    price: "A partir de R$ 180,00",
  },
  
  {
    folder: "produto10",
    category: "Álbuns",
    title: "Albun Rebit Personalizado - 80 Fotos",
    description:
      "Álbum com capacidade fixa com rebites. Capa impressa, folhas em plástico cristal.",
    price: "A partir de R$ 180,00",
  },
  
  {
    folder: "produto11",
    category: "Álbuns",
    title: "Albun Instalivro Sintético 10x15",
    description:
      "Dupla face ja incluso Laser o personalizado adicional de R$ 20,00",
    price: "A partir de R$ 180,00",
  },
  
  {
    folder: "produto11",
    category: "Álbuns",
    title: "Instalivro  Instalivro  Sintético 15x21",
    description:
      "Dupla face ja incluso Laser o personalizado adicional de R$ 20,00, consulta cores",
    price: "A partir de R$ 180,00",
  },

   {
    folder: "produto12",
    category: "Álbuns",
    title: "Albun Pro Gaveta",
    description:
      "Modelo para 1 Álbum - Com gravação a laser ou placa personalizada Inclusa, Base em Madeira com acabamento inferior e superior revestido , consultar cores",
    price: "A partir de R$ 180,00",
  },
   {
    folder: "produto13",
    category: "kit Revelações",
    title: "Kit Revelações de fotos 10X15",
    description:
      `Transforme seus momentos favoritos em memórias reais! 
      ✨ Não deixe suas fotos esquecidas na galeria do celular. 
      Com o nosso Kit Revelação de Fotos 10x15, você dá vida às lembranças que merecem ser guardadas com carinho.
       📸 Escolha o pacote que combina com você:
        • Kit 10 fotos: R$ 27,90 
        • Kit 20 fotos: R$ 47,90
         • Kit 40 fotos: R$ 79,90`,
         price: "A partir de R$ 180,00",
  },
  {
    folder: "produto13",
    category: "kit Revelações",
    title: "Kit Revelações de fotos 15X21",
    description:
     `
Confira nossos pacotes de revelação 15x21:

• Kit 10 fotos: R$ 63,90
• Kit 20 fotos: R$ 109,90
• Kit 40 fotos: R$ 189,90
`,
    price: "A partir de R$ 180,00",
  },

  {
    folder: "produto14",
    category: "Quadros",
    title: "Quadros  20x30  + Foto",
    description:
    "Quadro 20X30 Acompanha foto",
    price: "A partir de R$ 59.90",
  },

   {
    folder: "produto14",
    category: "Quadros",
    title: "Quadros  15x21  + Foto",
    description:
    "Quadro 15X21 Acompanha foto",
    price: "A partir de R$ 49.90",
  },
 
 

];



export function Products() {
  

  const [selectedCategory, setSelectedCategory] =
    useState("Todos");


  const [selectedProduct, setSelectedProduct] =
    useState<any>(null);


  const [currentImage, setCurrentImage] =
    useState(0);

  function solicitarOrcamento() {
  if (!selectedProduct) return;

  const mensagem = `Olá, Diovana!
Vim através do seu site e gostaria de solicitar um orçamento sobre o produto: ${selectedProduct.title}.`;

  const url = `https://api.whatsapp.com/send/?phone=554691321472&text=${encodeURIComponent(
    mensagem
  )}&type=phone_number&app_absent=0`;

  window.open(url, "_blank");
}

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
text-yellow-800
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
whitespace-pre-line
">

{selectedProduct.description}

</p>



<strong className="
text-4xl
text-accent
mt-8
text-yellow-800
">

{selectedProduct.price}

</strong>



<button
  onClick={solicitarOrcamento}
  className="
    mt-8
    bg-gray-700
    hover:bg-gray-800
    text-white
    rounded-full
    px-8
    py-3
    transition
  "
>
  Solicitar orçamento sobre o produto:
  <br />
  <strong>{selectedProduct.title}</strong>
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