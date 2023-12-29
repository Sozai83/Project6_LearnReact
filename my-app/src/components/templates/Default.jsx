import { Header } from '../atoms/layout/Header'
import { Footer } from '../atoms/layout/Footer'


export const Default = (props) => {

    const { children } = props;

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}