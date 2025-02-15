import ClassBlock from "./classBlock.js";

export default function Column({ day, classes, timeStart, timeEnd, height }) {;
    function mapToClassBlock(classData) {;
        return (
            <ClassBlock name={classData.name} timeStart={classData.timeStart}
            timeEnd={classData.timeEnd} columnTimeStart={timeStart} columnTimeEnd={timeEnd} columnHeight={height}/>
        );
    }

    const hourGap = height / (timeEnd - timeStart);
    const background = "repeating-linear-gradient(0deg, #fff, #fff " + hourGap + "px, #ccc " + hourGap + "px, #ccc " + hourGap * 2 + "px)"
    return (
        <div className="column">
            <div className="columnHeader">
                <p>{day}</p>
            </div>
            <div className="columnContent" style={{height: height, background: background}}>
                {classes.map(mapToClassBlock)}
            </div>
        </div>
    );
}