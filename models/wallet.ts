import mongoose from 'mongoose'


const WalletSchema = new mongoose.Schema({
    wallet: String
})

export default (mongoose.models.Wallet || mongoose.model("Wallet", WalletSchema))