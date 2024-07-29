import React, {useEffect, useState} from "react";
import {Category} from "../../../data/models/category";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "../../../shadcn_ui/components/ui/select";

interface CategoryFilter {
    onCategorySelected: (category: Category | null) => void;
}

function CategoryFilter({onCategorySelected}: CategoryFilter) {

    const handleCategoryChange = (value: string) => {
        if (value === 'all') {
            onCategorySelected(null);
        } else {
            onCategorySelected(value as Category);
        }
    };

    return (
        <Select defaultValue="all" onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-48 bg-white rounded-lg p-4 cursor-pointer hover:border-black">
                <SelectValue/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="all">Всі послуги</SelectItem>
                    <SelectItem value={Category.Electricity}>Електроенергія</SelectItem>
                    <SelectItem value={Category.Water}>Вода</SelectItem>
                    <SelectItem value={Category.Gas}>Газ</SelectItem>
                    <SelectItem value={Category.Heating}>Опалення</SelectItem>
                    <SelectItem value={Category.Other}>Інше</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>

    );
}

export default CategoryFilter;
