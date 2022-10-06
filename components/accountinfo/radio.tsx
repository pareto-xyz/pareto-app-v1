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
            <GreenContainer className=''>
                <GreenSelectButton
                    selected={selected === 'Positions'}
                    className='w-[8rem] h-[2.25rem]'
                    onClick={() => {
                        setSelected('Positions')
                    }}
                >
                    Positions
                </GreenSelectButton>
                <GreenSelectButton
                    selected={selected === 'Trade History'}
                    className='w-[10rem] h-[2.25rem]'
                    onClick={() => {
                        setSelected('Trade History')
                    }}
                >
                    Trade History
                </GreenSelectButton>
                <GreenSelectButton
                    selected={selected === 'Settlement History'}
                    className='w-[12rem] h-[2.25rem]'
                    onClick={() => {
                        setSelected('Settlement History')
                    }}
                >
                    Settlement History
                </GreenSelectButton>
            </GreenContainer>
        )
    }