import { useTranslation } from "next-i18next";

const Filter = ({
    bgColor,
    svg,
    name,
    id,
    categoriesFilter,
    // eslint-disable-next-line unused-imports/no-unused-vars
    currentCategory,
    setCurrentCategory,
}) => {
    const { t } = useTranslation("categories");
    let firstElementStyle = null;
    let lastElementStyle = null;

    if (id === 1) {
        firstElementStyle = "xxs:ml-[14rem] ne:ml-0 lg:ml-[8rem] xl:ml-0";
    } else {
        firstElementStyle = "xs:ml-0";
    }
    if (id === 6) {
        lastElementStyle = "xxs:mr-[2rem] ne:mr-0 lg:mr-[2rem] xl:mr-0";
    } else {
        lastElementStyle = "xs:mr-0";
    }

    return (
        <div
            className={`${firstElementStyle} ${lastElementStyle} scale-90 xxs:scale-90 lg:scale-75 xl:scale-90`}
            onClick={() => {
                setCurrentCategory(name);
                categoriesFilter(name);
            }}
        >
            <div
                className={`flashing flex h-20 w-20 items-center justify-center rounded-full hover:cursor-pointer xxs:scale-[50%] sm:scale-90 md:scale-90 lg:scale-100 ${bgColor}`}
            >
                <svg
                    viewBox='0 0 24 24'
                    className='h-12 w-12 shrink fill-white'
                >
                    <path
                        className='text-center'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d={svg}
                    />
                </svg>
            </div>
            <h1 className='text-center font-sans text-extraDarkPurple xxs:mt-[-18px] xxs:scale-75 xxs:pb-2 sm:mt-0 md:scale-90 md:pb-0 lg:pt-2'>
                {t(`${name}`)}
            </h1>
        </div>
    );
};

export default Filter;
