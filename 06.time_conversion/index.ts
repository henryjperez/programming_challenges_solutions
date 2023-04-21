function timeConversion(s: string): string {
    const t = [...s];
    const time = t.splice(-2).join("").toUpperCase();
    
    if (time === "AM") {
        if (t.slice(0, 2).join("") === "12") {
            t[0] = "0";
            t[1] = "0";
        }
        return t.join("");
    }
    if (time === "PM") {
        const hour = Number(s[0] + s[1]);
        
        const newFormat: number | string = hour < 12 ? hour + 12 : hour;
        const nt = String(newFormat);
        
        t[0] = nt[0];
        t[1] = nt[1];
        
        return t.join("");
    }
}


const input = "07:05:45PM" // output 19:05:45