export type Category = {
  id: string;
  label: string;
  photos: string[];
};

const createCategory = (
  id: string,
  label: string,
  photos: string[]
): Category => ({
  id,
  label,
 photos: photos.map((photo) => `/${id}/${photo}`)
});

export const categories: Category[] = [
  createCategory("casamentos", "Casamentos", [
     "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg",
    "15.jpeg",
    "16.jpeg",
        "16.jpeg",
 
   
  ]),

  createCategory("feminino", "Ensaio Feminino", [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.png",
    "8.png",
    "9.png",
    "10.png",
  ]),



  createCategory("familia", "Ensaio Família", [
    "1.png",
    "2.png",
    "3.png",
    "4.jpeg",
    "5.jpeg",
    "6.png",
    "7.png",
     "8.png",
   "9.png",
  ]),
];