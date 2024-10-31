import { Button } from "@mui/material"
import { ButtonHTMLAttributes, FC } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: string;
}

const MyButton: FC<ButtonProps> = (props: ButtonProps) => {
    const {children} = props
    return (
        <Button 
        variant="contained"
        sx={{backgroundColor: 'black', width: "200px", height: "30px", borderRadius: "8px"}}
        >
            {children}
        </Button>
    )
}

export {MyButton}