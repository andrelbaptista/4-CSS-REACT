import classes from "./Title.module.css" 

const Title = () => {
  return (
    <div>
        <h1 className={classes.title}>Um título para o CSS modules - scope</h1>
    </div>
  )
}

export default Title