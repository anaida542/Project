export function epochToDateString(epochSeconds : number) : string {
    const milliseconds = epochSeconds * 1000;

    const date = new Date(milliseconds);

    return  date.toLocaleString();
}
