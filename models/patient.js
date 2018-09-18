module.exports = (sequelize, DataTypes) => sequelize.define(
    'info_patient',
    {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        id_card_number: DataTypes.STRING,
        name_cn: {
            type: DataTypes.STRING,
        },
        name_en: {
            type: DataTypes.STRING,
        },
        sex: DataTypes.STRING,
        birthday: DataTypes.DATE,
        address: DataTypes.STRING,
        contact_name: DataTypes.STRING,
        phone: DataTypes.STRING,
        wechat_id: DataTypes.STRING,
        contact_phone: DataTypes.STRING,
        merged_into_table_id: DataTypes.INTEGER,
        datawashing_id: DataTypes.STRING,
        empi: DataTypes.STRING,
        zipcode: DataTypes.STRING,
        company: DataTypes.STRING,
        company_tel: DataTypes.STRING,
        nationality: DataTypes.STRING,
        syn_date: DataTypes.STRING
    },
    {
        tableName: 'info_patient',
    },
);
