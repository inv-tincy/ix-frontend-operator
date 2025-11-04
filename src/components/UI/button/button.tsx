import { Button, styled } from "@mui/material";
import {
    tonalVariants,
} from "./variantColor";

const TonalButton = styled(Button)(({
    tonalVariant = "blue",
}: {
    tonalVariant?: "blue" | "yellow" | "teal" | "gray" | "red" | "orange";
}) => {
    const tonalStyle = tonalVariants.find((v) => v.variant === tonalVariant);
    return {
        display: "flex",
        height: "28px",
        padding: "4px 8px",
        justifyContent: "center",
        alignItems: "center",
        gap: "var(--mm-spacing-s)",
        borderRadius: "var(--mm-size-radius-s)",
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "100%",
        ...tonalStyle?.style,
    };
});

export { TonalButton };
