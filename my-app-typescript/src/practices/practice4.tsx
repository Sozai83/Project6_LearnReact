export const Practice4 = () => {

    const calcTotalFee = (num) => {
        return num * 1.1;
    }

    const onClickPractice1 = () => {
        alert(calcTotalFee(1000))
    }
    return (
        < div >
            <p>
                hello
            </p>
            <button onClick={onClickPractice1}>Test</button>
        </div >

    )
}