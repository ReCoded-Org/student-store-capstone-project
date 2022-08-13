import { useTranslation } from "next-i18next";
import React from "react";

import Filter from "../filter";
import categories from "../filter/categories";
import PriceFilter from "../price-filter";

const CategoryPriceFilter = () => {
    const { t } = useTranslation("category-price-filter");
    return (
        <div className='px-[15px] pb-4 xxs:mt-[-3.5rem] md:pt-5 lg:mt-0'>
            <div className='invisible mx-5 my-2 grid gap-5 text-2xl font-bold text-purple lg:visible lg:grid-cols-3'>
                <div className='col-span-2'>
                    <h1 className='brush w-fit'>{t("categories")}</h1>
                </div>
                <div>
                    <h1 className='brush w-fit'>{t("price")}</h1>
                </div>
            </div>
            <div className='grid overflow-hidden rounded-full bg-white xxs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3'>
                <div className='col-span-2 my-3 grid grid-flow-col justify-center overflow-x-auto scrollbar-hide xxs:gap-0 md:gap-6'>
                    {categories.map((catergory, i) => (
                        <Filter
                            key={catergory[i].id}
                            bgColor={catergory[i].color}
                            svg={catergory[i].svg}
                            name={catergory[i].name}
                            id={catergory[i].id}
                        />
                    ))}
                </div>
                <div className='my-3 flex items-center justify-center'>
                    <PriceFilter />
                </div>
            </div>
        </div>
    );
};

export default CategoryPriceFilter;
