import React from "react";

const Button = (props) => {

    const handleClick00 = () => {
        (props.ugandanKnuckles.health += 1)
    }

    const handleClick0 = () => {
        (props.ugandanKnuckles.power += 1)
    }

    const handleClick1 = () => {
        props.setTrainingLog(
            <>
                {props.trainingLog}
                <br />
                You just got stronger!
            </>
        );
        props.setKnucklesPic(
        props.ugandanKnuckles.level > 9 ? 'https://c-cl.cdn.smule.com/rs-s80/arr/98/64/f6b38031-76c9-4968-94ad-835478022296_1024.jpg' : (props.ugandanKnuckles.level > 4 ? 'https://i.kym-cdn.com/entries/icons/mobile/000/025/067/ugandanknuck.jpg' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQoaQKLWn40Qt0KwohgJMnT6rBkM7mOs8lA9UifJ2yg&usqp=CAU&ec=48600112'));
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
        props.ugandanKnuckles.level >= 10 ? 'https://c-cl.cdn.smule.com/rs-s80/arr/98/64/f6b38031-76c9-4968-94ad-835478022296_1024.jpg' : (props.ugandanKnuckles.level >= 5 ? 'https://i.kym-cdn.com/entries/icons/mobile/000/025/067/ugandanknuck.jpg' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQoaQKLWn40Qt0KwohgJMnT6rBkM7mOs8lA9UifJ2yg&usqp=CAU&ec=48600112'));
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

    const addCaptcha = () => {
        const num1 = Math.floor(Math.random() * 100) + 1;
        const num2 = Math.floor(Math.random() * 100) + 1;
        const correctAnswer = num1 + num2;
        const userAnswer = prompt(`What is ${num1} + ${num2}?`);
        (userAnswer && parseInt(userAnswer) === correctAnswer) ? alert("Great job! that was correct!") : !addCaptcha();
    }

    const handleClickChain1 = () => {
        addCaptcha();
        handleClick0();
        handleClick1();
    }

    const handleClickChain2 = () => {
        addCaptcha();
        handleClick00();
        handleClick2();
    }

    return (
        <div>
            <button onClick={handleClickChain1}>Train</button>
            <button onClick={handleClickChain2}>Feed</button>
            <button onClick={handleClick3}>Scavange</button>
        </div>
    )


}

export default Button;