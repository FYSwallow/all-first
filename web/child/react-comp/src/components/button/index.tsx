import React, { CSSProperties, FC, ReactElement, ReactNode } from "react";
import classnames from "classnames";
import "./index.scss";

interface ButtonProps {
    onClick?: () => void;
    children?: ReactNode;
    prefixCls?: string;
    type?: string;
    disabled?: boolean;
    icon?: ReactNode;
    style?: CSSProperties;
    size?: string;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const { onClick, children, type, style, size, disabled, icon } = props;
    return (
        <button
            className={classnames(
                "rc-button",
                type && "rc-button-" + type,
                size && "rc-button" + size,
                {
                    "rc-button-disabled": disabled,
                    "rc-button-isloading": disabled,
                }
            )}
            style={style}
            onClick={onClick}
        >
            {icon || null}
            <span>{children}</span>
        </button>
    );
};

export default Button;
