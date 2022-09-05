import { calculateBonusForStat, formatBonusForStat } from "../helpers";
import styled from "styled-components";

const StatBlock = ({ tribute, stat, className }) => {
    return (
        <div className={className}>
            <div className="stat-text">{stat.toUpperCase()}</div>
            <div className="stat-block">
                <div className="stat-block__value">{tribute[stat]}</div>
                <div className="stat-block__modifier">
                    {formatBonusForStat(calculateBonusForStat(tribute[stat]))}
                </div>
            </div>
        </div>
    );
};

export default styled(StatBlock)`
    display: flex;
    flex-direction: row;
    align-items: center;

    .stat-text {
        min-width: 3rem;
    }

    .stat-block {
        display: flex;
        flex-direction: column;
        padding: 0.25rem;
        border: 1px solid black;
        border-radius: 0.25rem;
    }

    .stat-block__value {
    }

    .stat-block__modifier {
        font-size: 0.8rem;
    }
`;
