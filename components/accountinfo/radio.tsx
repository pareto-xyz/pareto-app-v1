import { Dispatch, SetStateAction } from "react"
import { GreenContainer, GreenSelectButton } from "../utils"


export const PositionsRadio: React.FC<{
    selected: string,
    setSelected: Dispatch<SetStateAction<string>>,
}> = ({
    selected,
    setSelected,
}) => {
        return (
            <GreenContainer className='w-5/6 md:w-fit'>
                <GreenSelectButton
                    selected={selected === 'Positions'}
                    className='md:w-[8rem] w-[5rem] h-[2.25rem]'
                    onClick={() => {
                        setSelected('Positions')
                    }}
                >
                    Positions
                </GreenSelectButton>
                <GreenSelectButton
                    selected={selected === 'Trade History'}
                    className='md:w-[10rem] w-[7rem] h-[2.25rem]'
                    onClick={() => {
                        setSelected('Trade History')
                    }}
                >
                    Trade History
                </GreenSelectButton>
                <GreenSelectButton
                    selected={selected === 'Settlement History'}
                    className='md:w-[12rem] w-[9rem] h-[2.25rem]'
                    onClick={() => {
                        setSelected('Settlement History')
                    }}
                >
                    Settlement History
                </GreenSelectButton>
            </GreenContainer>
        )
    }