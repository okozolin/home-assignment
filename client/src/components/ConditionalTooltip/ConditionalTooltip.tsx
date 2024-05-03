import {Tooltip} from "@mui/material";
import {ReactNode} from "react";

interface ConditionalTooltipProps {
    title?: ReactNode;
    children: React.ReactElement;
    placement?: 'bottom' | 'left' | 'right' | 'top'; // Add this line
    arrow?: boolean; // Add this line if you want to include the arrow prop as well
}

export const ConditionalTooltip: React.FC<ConditionalTooltipProps> = ({ title, children }) => {
    if (!title) {
        return children;
    }
    return (
        <Tooltip title={title}>
            {children}
        </Tooltip>
    );
};
