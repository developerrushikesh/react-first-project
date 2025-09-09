export default function Tabs({ children, buttons, ButtonsConainer = 'menu' }) {
    return (
        <>
            <ButtonsConainer>
                {buttons}
            </ButtonsConainer>
            {children}
        </>
    );
}
