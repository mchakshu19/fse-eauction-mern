import sendRequest from '../../utilities/fetchClient';

// interface ShowBidsInputParams {
//     productId: string
// }

const showBids = ({ productId }) =>
    sendRequest({
        url: `/e-auction/api/v1/seller/show-bids/${productId}`,
    }).then((res) => res).catch((err) => console.log(err));

export default showBids;