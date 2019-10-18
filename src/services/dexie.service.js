

class DixeService {
    constructor() {
        this.db = new Dexie("friend_database");
        this.db.version(1).stores({
            user: 'id,first_name,last_name,country'
        });

        if( arguments[0] != undefined && typeof arguments[0] == "object" ){
            let options = arguments[0];
            Object.keys(options).forEach(k=>{
                this[k] = options[k];
            })
        }
    }

    insertUser = function(user){
        let db = this.db;
        return db.user.add(user).then(function(put_id){
            return db.user.get(put_id);
        });
    }

    insertOrUpdateUser = function(user){
        let db = this.db;

        return db.user.put(user).then(function(put_id){
            return db.user.get(put_id);
        });
    }

    deleteUser = function(userId){
        return this.db.user.delete(userId);
    }

    getAllUser() {
        return this.db.user.toArray()
    }

    createUserDatabase = function () {
        let db = this.db;

        db.user.put({ name: "Nicolas", shoeSize: 8 }).then(function (res) {
            return db.user.get('Nicolas');
        }).then(function (friend) {
            alert("Nicolas has shoe size " + friend.shoeSize);
        }).catch(function (error) {
            alert("Ooops: " + error);
        });
    }

    generateUserId() {
        this.length = 8;
        this.timestamp = +new Date;

        var ts = this.timestamp.toString();
        var parts = ts.split("").reverse();
        var id = "";

        var _getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        for (var i = 0; i < this.length; ++i) {
            var index = _getRandomInt(0, parts.length - 1);
            id += parts[index];
        }

        return id;
    }
}

export default DixeService;

