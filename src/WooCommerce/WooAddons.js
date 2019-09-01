/**
 * Created by InspireUI on 4/07/2018.
 *  luyxtran264@gmail.com
 * @format
 */

import AddonAPI from "./AddonAPI";

export default class WooAddons {
    _api = null;


    static init = ({
        url,
        consumerKey,
        consumerSecret,
        wp_api = true,
        version = "wc-product-add-ons/v1",
        queryStringAuth = true,
        language,
    }) => {
        try {
            this._api = new AddonAPI({
                url,
                consumerKey,
                consumerSecret,
                wp_api,
                version,
                queryStringAuth,
                language,
            });
            console.log('enter');
        } catch (error) {
            console.log(error);
        }
    };

    static productAddons = async(product) => {
        try {
            // const data = {
            //     per_page,
            //     page
            // };
            // const response = await this._api.get(
            //     `product-add-ons/${product.id}`,
            //     data
            // );

            //const response = await this._api.get("product-add-ons");
            const response = await this._api.get("product-add-ons");
            //console.log(response);
            return response.json();
        } catch (err) {
            console.log(err);
        }
    };
}