module.exports = (sequelize,DataTypes) => {


    //Postschema
        const RegisterSchema = sequelize.define("Register" , {   
    
            Fname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            
            Lname: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            confirmPassword: {
                type: DataTypes.STRING,
                allowNull: false,
            },  

            address: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            Bdate: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            Grade: {            
                type: DataTypes.STRING,
                allowNull: false,   
            },
           
    
        });
    
        return RegisterSchema;
     };