import classes from './CSSModules.module.scss'

export const CssModules = () => {
    return (
        <div className={classes.container}>
            <p>CSS Modules</p>
            <button>Fight!</button>
        </div>
    );
}