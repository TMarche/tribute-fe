export const calculateBonusForStat = (statValue) => {
    const BASE_VALUE = 10;
    return Math.floor((statValue - BASE_VALUE) / 2);
};

export const formatBonusForStat = (bonusValue) => {
    if (bonusValue >= 0) return `+${bonusValue}`;
    return `-${bonusValue}`;
};

export const calculateHitPoints = (con) => {
    const BASE_VALUE = 10;
    return BASE_VALUE + con * 2;
};
