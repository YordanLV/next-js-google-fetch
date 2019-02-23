import style from './Button.scss';

export default (props) => {
  return (
    <div>
      <a href={props.href} className={style.button}>
        {props.text}
      </a>
    </div>
  );
};
