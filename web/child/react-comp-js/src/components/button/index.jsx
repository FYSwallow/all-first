import classnames from 'classnames';
import './index.scss';

function Button(props) {
    const { onClick, children, type, style, size, disabled , icon} = props;
    return (
        <button
            className={classnames(
                'rc-button',
                type && 'rc-button-' + type,
                size && 'rc-button' + size,
                {
                    'rc-button-disabled': disabled,
                    'rc-button-isloading': disabled,
                },
            )}
            style={style}
            onClick={onClick}
        >
            {icon || null}
            <span>{children}</span>
        </button>
    );
}

export default Button;
