import React, { PropsWithChildren } from "react";



export const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ')
}

export const RedContainer: React.FC<PropsWithChildren<{
    className: string,
}>> = ({
    className,

    children,
}) => {
        return <div className={'drop-shadow bg-red-200 rounded-xl w-fit h-fit p-2 flex justify-around ' + className}>
            {children}
        </div >
    }

export const GreenContainer: React.FC<PropsWithChildren<{
    className: string,
}>> = ({
    className,

    children,
}) => {
        return <div className={'drop-shadow bg-green-200 rounded-xl w-fit h-fit p-2 flex justify-around ' + className}>
            {children}
        </div>
    }

export const GreenSelectButton: React.FC<PropsWithChildren<{
    selected: boolean,
    className: string,
    onClick: () => void,
}>> = ({
    selected,
    className,
    onClick,

    children,
}) => {
        const styling = selected ? ' bg-green-500 text-white ' : ' bg-green-200 text-green-500 ';

        return <button className={className + styling + ' rounded-xl '} onClick={onClick}>
            {children}
        </button>
    }

export const RedSelectButton: React.FC<PropsWithChildren<{
    selected: boolean,
    className: string,
    onClick: () => void,
}>> = ({
    selected,
    className,
    onClick,

    children,
}) => {
        const styling = selected ? ' bg-red-500 text-white ' : ' bg-red-200 text-red-500 ';

        return <button className={className + styling + ' rounded-xl '} onClick={onClick}>
            {children}
        </button>
    }