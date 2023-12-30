export const Practice3 = () => {

    const getTotalValue = (num: number): string => {
        const total = num + ' tax: ' + num * 0.1;
        return total;
    }

    const onClickPractice1 = () => {
        let total: string = ''
        total = getTotalValue(1000)
        alert(total)
    }

    return (
        < div >
            <p>
                Test2: Setting type for returned value
            </p>
            <button onClick={onClickPractice1}>Test</button>
        </div >

    )
}