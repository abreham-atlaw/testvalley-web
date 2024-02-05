import NetworkClient from "@/common/network/NetworkClient";
import DataConfigs from "@/configs/dataConfigs";



export default class CoreProviders{


	static networkClient?: NetworkClient;

	static provideNetworkClient(): NetworkClient{
		if(this.networkClient === undefined){
			this.networkClient = new NetworkClient(DataConfigs.API_URL);
		}
		return this.networkClient;
	}

}