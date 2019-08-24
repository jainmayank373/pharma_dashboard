import ACTIONS from '../Rdux_Const.js'
import store from '../store.js';

export const load_unverified_partner = (data) => {
    return {
        type: ACTIONS.LOADING_UNVERIFIED_PARTNER,
        payload: data,
        fetching: false
    }
}

export const verify_partner = () => {
    return {
        type: ACTIONS.VERIFYING_PARTNER
    }
}
export const verifying_partner = (data) => {
    return {
        type: ACTIONS.VERIFIED_PARTNER,
        payload: data
    }
}
export const dialogOpen = () => {
    return {
        type: ACTIONS.DIALOG_OPEN
    }
}

export const dropDownClose = () => {
    return {
        type: ACTIONS.DROPDOWN_CLOSE
    }
}


export const dropDownOpen = () => {
    return {
        type: ACTIONS.DROPDOWN_OPEN
    }
}

export const dialogClose = () => {
    return {
        type: ACTIONS.DIALOG_CLOSE
    }


}
export const load_partner = (data) => {
    return {
        type: ACTIONS.LOAD_PARTNER,
        payload: data,
        fetching: false
    }
}


export const loading_partner = () => {

    return {
        type: ACTIONS.LOADING_PARTNER,
        fetching: true
    }
}

export const loading_harmonized = () => {
    return {
        type: ACTIONS.LOADING_HARMONIZED

    }
}

export const loaded_harmonized = (data) => {
    return {
        type: ACTIONS.LOADED_HARMONIZED,
        payload: data
    }
}

export const loading_unharmonized = (data) => {
    return {
        type: ACTIONS.LOADING_UNHARMONIZED
    }
}

export const loaded_unharmonized = (data) => {
    return {
        type: ACTIONS.LOADED_UNHARMONIZED,
        payload: data
    }
}

export const on_decline = () => {
    return {
        type: ACTIONS.DECLINE_REQUEST
    }
}
export const loaded_image = (data) => {
    return {
        type: ACTIONS.LOADED_IMAGE,
        payload: data
    }
}
export const populatingForm = (data) => {
    return {
        type: ACTIONS.POPULATING_FORM,
        payload: data
    }
}
export const unPopulatingForm = () => {
    return {
        type: ACTIONS.UNPOPULATING_FORM,
        payload: null
    }
}

export const on_fetching_suggestion = (data) => {
    return {
        type: ACTIONS.FETCHING_SUGGESTION,
        payload: data
    }
}

export const LoadingPartnerInfo = (actionType) => {

    store.dispatch(loading_partner())
    return () => {


        fetch("http://ec2-34-227-149-17.compute-1.amazonaws.com:8080/v1/graphql", {

            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ "query": "{\n  org(where: {is_verified: {_eq: \"true\"}}) {\n    created\n    usr_orgs {\n   m_number\n }\n  addresses {\n      city\n      locality\n      org_id\n      pincode\n  }\n      is_active\n    org_id\n    org_name\n    is_verified\n  }\n}\n", "variables": null })
        })
            .then((res) => res.json())
            .then(res => store.dispatch(load_partner(res)))
            .catch((err) => console.log(err))
    }
}

export const LoadingUnverifiedPartner = (actionType) => {

    store.dispatch(loading_partner())
    return () => {


        fetch("http://ec2-34-227-149-17.compute-1.amazonaws.com:8080/v1/graphql", {

            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ "query": "\n{\n  org(where: {is_verified: {_eq: \"false\"}}) {\n    gstin\n    org_name\n    drug_licenses {\n      image_identifier\n  drug_license_no\n  valid_till\n  license_type\n      modified\n      org_id\n      user_id\n      valid_till\n    }\n    usr_orgs {\n  email\n  f_name\n  m_number\n }\n    is_active\n    is_verified\n    org_id\n    org_type\n    created\n    addresses {\n      city\n      locality\n      org_id\n      pincode\n  }\n  }\n}\n", "variables": null })
        })
            .then((res) => res.json())
            .then(res => { console.log("RESPONSE", res); return res })
            .then(res => store.dispatch(load_unverified_partner(res)))
            .catch((err) => console.log(err))
    }
}

export const VerifyingPartner = (org_id, drug_license_no, license_type, valid_till) => {

    store.dispatch(verify_partner());
    return () => {
        console.log(org_id);

        var URL = { "query": "mutation {\n  update_org(where: {org_id: {_eq: " + org_id + "}, _set: {is_verified: true}) {\n    returning {\n      is_verified\n    }\n  }\n}\n", "variables": null }
        console.log(URL);
        //     {"query":"mutation {\n  update_org(where: {org_id: {_eq: 10}}, _set: {is_verified: true}) {\n    returning {\n      is_verified\n    }\n  }\n  update_drug_license(where: {org_id: {_eq: 10}}, _set: {drug_license_no: \"\", license_type: \"Retail\", valid_till: \"wqqwqw\"}) {\n    returning {\n      license_type\n      drug_license_no\n      valid_till\n    }\n  }\n}\n","variables":null}

        fetch("http://ec2-34-227-149-17.compute-1.amazonaws.com:8080/v1/graphql", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ "query": "mutation {\n  update_org(where: {org_id: {_eq: " + org_id + " }}, _set: {is_verified: true}) {\n    returning {\n      is_verified\n      is_active\n    }\n  }\n  update_drug_license(where: {org_id: {_eq: " + org_id + " }}, _set: {drug_license_no: \"" + drug_license_no + "\", license_type: \"" + license_type + "\" , valid_till: \"" + valid_till + "\"}) {\n    returning {\n      license_type\n      drug_license_no\n    }\n  }\n}\n", "variables": null })

        })
            .then((res) => res.json())
            .then(res => { console.log("Verifying User", res); return res })
            .then(res => store.dispatch(verifying_partner(res)))
            .catch((err) => console.log(err))
    }
}

export const loadingHarmonized = () => {

    store.dispatch(loading_harmonized);

    return () => {

        fetch("http://ec2-34-227-149-17.compute-1.amazonaws.com:8080/v1/graphql", {

            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ "query": "{\n  med_master_list {\n    brand_name\n    composition\n    hsn_id\n    is_banned\n    med_form\n    pres_type\n    primary_pack\n    secondary_pack\n    manufacturer\n  }\n}\n", "variables": null })
        })
            .then((res) => res.json())
            .then(res => { console.log("Loaded harmonised medicines", res); return res })
            .then(res => store.dispatch(loaded_harmonized(res)))
            .catch((err) => console.log(err))
    }

}

export const loadingUnHarmonized = () => {

    store.dispatch(loading_unharmonized);
    return () => {

        fetch("http://ec2-34-227-149-17.compute-1.amazonaws.com:8080/v1/graphql", {

            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ "query": "{\n  unharmonized_medicines {\n    brand_name\n   created\n   is_declined\n    med_form\n    manufacturer\n    unhar_med_id\n    modified\n    inventories(distinct_on: inventory_id) {\n      org {\n        org_name\n      }\n    }\n  }\n}\n", "variables": null })
        })
            .then((res) => res.json())
            .then(res => { console.log("Loaded Unharmonised medicines", res); return res })
            .then(res => store.dispatch(loaded_unharmonized(res)))
            .catch((err) => console.log(err))
    }


}

export const onDecline = (org_id) => {

    return () => {
        fetch("http://ec2-34-227-149-17.compute-1.amazonaws.com:8080/v1/graphql", {

            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ "query": "mutation {\n  update_unharmonized_medicines(where: {unhar_med_id: {_eq: " + org_id + "}}, _set: {is_declined: true}) {\n    returning {\n      is_declined\n      unhar_med_id\n    }\n  }\n}\n", "variables": null })
        })
            .then((res) => res.json())
            .then(res => { console.log("Loaded Unharmonised medicines", res); return res })
            .then(res => store.dispatch(on_decline(res)))
            .catch((err) => console.log(err))
    }
}

export const loadedImage = (image_identifier) => {
    return () => {
        fetch("http://ec2-34-227-149-17.compute-1.amazonaws.com:3000/download?image_identifier=1dced081-aa2a-427b-b527-63abb29ad9b3", {

            method: "GET"
        })
            .then((res) => { console.log(res); return res.json() })
            .then(res => { console.log("IMAGE IDENTIYING", res); return res })
            .then(res => store.dispatch(loaded_image(res)))
            .catch((err) => console.log(err))
    }
}

export const fetchingSuggestion = (value) => {

    return () => {

        fetch("http://ec2-34-227-149-17.compute-1.amazonaws.com:8080/v1/graphql", {

            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ "query": "{\n  med_master_list(where: {composition: {_ilike: \"%" + value + "%\"}}) {\n    composition\n    brand_name\n  }\n}\n", "variables": null })
        })
            .then((res) => res.json())
            .then(res => { console.log("fetching suggestion", res); return res })
            .then(res => store.dispatch(on_fetching_suggestion(res)))
            .catch((err) => console.log(err))
    }


}