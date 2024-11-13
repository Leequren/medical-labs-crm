import { create } from "zustand";
import { routes } from "../config/routes";

type CategoryStaffPage = {
    id: number,
    nameCategory: string,
    counterCategory: number,
    nameSubcategory: string,
    route: string
}

type Doctors = {
    id: number,
    firstName: string,
    lastName: string,
    middleName: string,
    nameClinic: string,
    address: string,
    imgUrl: string,
    categoryId: number
}

type Techniques = {
    id: number,
    firstName: string,
    lastName: string,
    middleName: string,
    imgUrl: string,
    categoryId: number
}

type TypesWork = {
    id: number,
    typesProsthetics: string,
    nameTypeWork: string,
    imgUrl: string,
    stages: TypesWorkStages[]
}

type TypesWorkStages = {
    id: number,
    nameTypeWorkStage: string,
    nameMaterial: string,
    pricePiece: number,
    priceMaterial: number,
    totalPrice: number,
    typeWorkId: number
}

type CategoryTechniques = {
    id: number,
    nameCategory: string,
    techniques: Techniques[]
}

export type Store = {
    categoryStaffPage: CategoryStaffPage[],
    doctors: Doctors[],
    techniques: Techniques[],
    typesWork: TypesWork[],
    typesWorkStages: TypesWorkStages[],
    categoryTechniques: CategoryTechniques[],
    addDoctor: (doctor: Doctors) => void,
    addTechnique: (technique: Techniques) => void,
    addTypeWork: (typeWork: TypesWork) => void,
    addTypeWorkStage: (typeWorkStage: TypesWorkStages) => void,
    addCategoryTechnique: (category: CategoryTechniques) => void,
    removeDoctor: (id: number) => void,
    removeTechnique: (id: number) => void,
    removeTypeWork: (id: number) => void,
    removeTypeWorkStage: (id: number) => void,
    removeCategoryTechnique: (id: number) => void,
    updateDoctor: (doctor: Doctors) => void,
    updateTechnique: (technique: Techniques) => void,
    updateTypeWork: (typeWork: TypesWork) => void,
    updateTypeWorkStage: (stage: TypesWorkStages) => void,
    updateCategoryTechnique: (category: CategoryTechniques) => void,
}

const initialCategoryStaffPage: CategoryStaffPage[] = [
    { id: 1, nameCategory: "Врачи", counterCategory: 17, nameSubcategory: "Специалисты", route: routes.doctors },
    { id: 2, nameCategory: "Техники", counterCategory: 9, nameSubcategory: "Специалисты", route: routes.techniques },
    { id: 3, nameCategory: "Виды работ", counterCategory: 36, nameSubcategory: "Наименования", route: routes.typesWork },
    { id: 4, nameCategory: "Категория техников", counterCategory: 3, nameSubcategory: "Категории", route: routes.categoryTechniques },
];

const initialDoctors: Doctors[] = [
    { id: 1, firstName: "Сергей", lastName: "Тимус", middleName: "Александрович", nameClinic: "Медгарант", address: "Екатеринбург, Казаса 15", imgUrl: "/image/2.png", categoryId: 1 },
    { id: 2, firstName: "Евгений", lastName: "Завадский", middleName: "Станиславович", nameClinic: "Медгарант", address: "Екатеринбург, Казаса 15", imgUrl: "/image/2.png", categoryId: 1 },
    { id: 3, firstName: "Сергей", lastName: "Тимус", middleName: "Александрович", nameClinic: "Медгарант", address: "Екатеринбург, Казаса 15", imgUrl: "/image/2.png", categoryId: 1 },
    { id: 4, firstName: "Евгений", lastName: "Завадский", middleName: "Станиславович", nameClinic: "Медгарант", address: "Екатеринбург, Казаса 15", imgUrl: "/image/2.png", categoryId: 1 },
    { id: 5, firstName: "Сергей", lastName: "Тимус", middleName: "Александрович", nameClinic: "Медгарант", address: "Екатеринбург, Казаса 15", imgUrl: "/image/2.png", categoryId: 1 },
    { id: 6, firstName: "Евгений", lastName: "Завадский", middleName: "Станиславович", nameClinic: "Медгарант", address: "Екатеринбург, Казаса 15", imgUrl: "/image/2.png", categoryId: 1 },
];

const initialTechniques: Techniques[] = [
    { id: 1, firstName: "Николай", lastName: "Боремский", middleName: "Владимирович", imgUrl: "/image/2.png", categoryId: 2 },
    { id: 2, firstName: "Мария", lastName: "Дарвиш", middleName: "Владимировна", imgUrl: "/image/2.png", categoryId: 2 },
];

const initialTypesWork: TypesWork[] = [
    { id: 1, typesProsthetics: "Металлокерамика", nameTypeWork: "Металлокерамическая коронка", imgUrl: "img5.jpg", stages: [] },
];

const initialTypesWorkStages: TypesWorkStages[] = [
    { id: 1, nameTypeWorkStage: "Лепка", nameMaterial: "Циркониевый диск", pricePiece: 780, priceMaterial: 320, totalPrice: 1100, typeWorkId: 1 },
    { id: 2, nameTypeWorkStage: "Каркас", nameMaterial: "Циркониевый диск", pricePiece: 620, priceMaterial: 260, totalPrice: 880, typeWorkId: 1 },
];

const initialCategoryTechniques: CategoryTechniques[] = [
    { id: 1, nameCategory: "Техники высшей категории", techniques: [] },
];

export const useStore = create<Store>((set) => ({
    categoryStaffPage: initialCategoryStaffPage,
    doctors: initialDoctors,
    techniques: initialTechniques,
    typesWork: initialTypesWork,
    typesWorkStages: initialTypesWorkStages,
    categoryTechniques: initialCategoryTechniques,

    addDoctor: (doctor) => set((state) => ({ doctors: [...state.doctors, doctor] })),
    addTechnique: (technique) => set((state) => ({ techniques: [...state.techniques, technique] })),
    addTypeWork: (typeWork) => set((state) => ({ typesWork: [...state.typesWork, typeWork] })),
    addTypeWorkStage: (stage) => set((state) => ({ typesWorkStages: [...state.typesWorkStages, stage] })),
    addCategoryTechnique: (category) => set((state) => ({ categoryTechniques: [...state.categoryTechniques, category] })),

    removeDoctor: (id) => set((state) => ({ doctors: state.doctors.filter(d => d.id !== id) })),
    removeTechnique: (id) => set((state) => ({ techniques: state.techniques.filter(t => t.id !== id) })),
    removeTypeWork: (id) => set((state) => ({ typesWork: state.typesWork.filter(w => w.id !== id) })),
    removeTypeWorkStage: (id) => set((state) => ({ typesWorkStages: state.typesWorkStages.filter(s => s.id !== id) })),
    removeCategoryTechnique: (id) => set((state) => ({ categoryTechniques: state.categoryTechniques.filter(c => c.id !== id) })),

    updateDoctor: (doctor) => set((state) => ({
        doctors: state.doctors.map(d => d.id === doctor.id ? doctor : d)
    })),
    updateTechnique: (technique) => set((state) => ({
        techniques: state.techniques.map(t => t.id === technique.id ? technique : t)
    })),
    updateTypeWork: (typeWork) => set((state) => ({
        typesWork: state.typesWork.map(w => w.id === typeWork.id ? typeWork : w)
    })),
    updateTypeWorkStage: (stage) => set((state) => ({
        typesWorkStages: state.typesWorkStages.map(s => s.id === stage.id ? stage : s)
    })),
    updateCategoryTechnique: (category) => set((state) => ({
        categoryTechniques: state.categoryTechniques.map(c => c.id === category.id ? category : c)
    })),
}));
