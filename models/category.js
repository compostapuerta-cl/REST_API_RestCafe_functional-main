const {Schema,model}=require('mongoose');

const CategorySchema=Schema({
    name:{
        type: String,
        required: [true,'Name is required']
    },
    state:{
        type: Boolean,
        default: true,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "user is required"]
    },
    products:[{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

CategorySchema.methods.toJSON = function() {
    const { __v,...data} = this.toObject();
    return data;
}

module.exports=model('Category',CategorySchema);