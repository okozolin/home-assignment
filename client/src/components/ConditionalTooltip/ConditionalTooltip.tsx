import {Tooltip} from "@mui/material";

const ConditionalTooltip = ({ title, children }) => {
    if (!title) {
        return children;
    }
    return (
        <Tooltip title={title}>
            {children}
        </Tooltip>
    );
};

export default ConditionalTooltip