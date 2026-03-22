import {Client , Account , ID} from 'appwrite'
import Str from '../Strigify/toStr'
import { Url } from '../components/ForgetPasswordPage';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(Str.appwriteUrl)
            .setProject(Str.projectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }



    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }

    async CreatePasswordReset({email,url}){
        try {
           return await this.account.createRecovery(email,url);
        } catch (error) {
            throw(error)
        }
    }

    async ConfirmedResetPassword(userId,secret,password){
        try {
           return await this.account.updateRecovery(userId,secret,password,password)
        } catch (error) {
            throw(error)
        }
    }
}

const authService = new AuthService();

export default authService