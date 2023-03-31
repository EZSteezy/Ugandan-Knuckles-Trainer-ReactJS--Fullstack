import React from "react";

const Button = (props) => {

    const handleClick1 = () => {
        props.setTrainingLog(
            <>
                {props.trainingLog}
                <br />
                You just got stronger!
            </>
        );
        props.setKnucklesPic(
            props.ugandanKnuckles.level >= 10 ? 'https://c-cl.cdn.smule.com/rs-s80/arr/98/64/f6b38031-76c9-4968-94ad-835478022296_1024.jpg' : (props.ugandanKnuckles.level >= 5 ? 'https://i.kym-cdn.com/entries/icons/mobile/000/025/067/ugandanknuck.jpg' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQoaQKLWn40Qt0KwohgJMnT6rBkM7mOs8lA9UifJ2yg&usqp=CAU&ec=48600112')
            );
        props.ugandanKnuckles.power += 1
        props.ugandanKnuckles.level = ((props.ugandanKnuckles.power + props.ugandanKnuckles.health) % 5 === 0) ? (props.ugandanKnuckles.power + props.ugandanKnuckles.health) / 5 : props.ugandanKnuckles.level;

    }
    const handleClick2 = () => {
        props.setTrainingLog(
            <>
                {props.trainingLog}
                <br />
                Your health went up!
            </>
        );
        props.setKnucklesPic(
            props.ugandanKnuckles.level >= 10 ? 'https://c-cl.cdn.smule.com/rs-s80/arr/98/64/f6b38031-76c9-4968-94ad-835478022296_1024.jpg' : (props.ugandanKnuckles.level >= 5 ? 'https://i.kym-cdn.com/entries/icons/mobile/000/025/067/ugandanknuck.jpg' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQoaQKLWn40Qt0KwohgJMnT6rBkM7mOs8lA9UifJ2yg&usqp=CAU&ec=48600112')
            );
        props.ugandanKnuckles.health += 1
        props.ugandanKnuckles.level = ((props.ugandanKnuckles.power + props.ugandanKnuckles.health) % 5 === 0) ? (props.ugandanKnuckles.power + props.ugandanKnuckles.health) / 5 : props.ugandanKnuckles.level;
    }
    const handleClick3 = () => {
        props.setTrainingLog(
            <>
                {props.trainingLog}
                <br />
                Your just found a few dollars!
            </>
        );
        props.ugandanKnuckles.wallet += (Math.floor(Math.random() * 10) + 1);
    }

    return (
        <div>
            <button onClick={handleClick1}>Train</button>
            <button onClick={handleClick2}>Feed</button>
            <button onClick={handleClick3}>Scavange</button>
        </div>
    )


}

export default Button;