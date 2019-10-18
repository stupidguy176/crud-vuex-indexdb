class ShareService {

    constructor() {
        this.wentOffline, this.wentOnline;
    }

    handleConnectionChange(event) {
        let text = '';
        if (event.type == "offline") {
            this.wentOffline = new Date(event.timeStamp);
            text = "You lost connection.";
            return text;
        }
        if (event.type == "online") {
            this.wentOnline = new Date(event.timeStamp);
            let timeLostConnect = `You were offline for ${(this.wentOnline - this.wentOffline) / 1000}  seconds.`;
            text = `You are now back online. ${timeLostConnect}`;
            return text;
        }
    }

}

export default ShareService