// Definição da interface para garantir tipagem
interface Category {
  id: string;
  label: string;
  photos: string[];
}

/**
 * Função utilitária para importar fotos de uma pasta específica
 */
const importPhotos = (folder: string): string[] => {
  const modules = import.meta.glob("../assets/**/*.{png,jpeg,jpg}", {
    eager: true,
    import: "default",
  });

  // Filtra apenas os arquivos da pasta desejada
  return Object.entries(modules)
    .filter(([path]) => path.includes(`../assets/${folder}/`))
    .map(([, value]) => value as string);
};

// Construção das categorias
export const categories: Category[] = [
  {
    id: "casamentos",
    label: "Casamentos",
    photos: importPhotos("casamentos"),
  },
  {
    id: "feminino",
    label: "Ensaio Feminino",
    photos: importPhotos("feminino"),
  },
  {
    id: "familia",
    label: "Ensaio Família",
    photos: importPhotos("familia"),
  },
];