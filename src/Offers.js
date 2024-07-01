import '@ututrust/web-components';

export default function Offers({ offers }) {
    return (
        <div className='offers'>
            <h2>Welcome to the UTU SDK Base Hack</h2>
            <h3>Choose your provider:</h3>
            <x-utu-root source-uuid='user-1' target-type='provider'>
                <ul>
                    {
                        offers.map(offer => 
                            <li className='offer' key={offer.id}>
                                <div>{offer.name}</div>
                                <br/><br/><br/><br/>
                                <x-utu-feedback-details-popup target-uuid={offer.id}/>
                                <x-utu-feedback-form-popup source-uuid="user-1" target-uuid={offer.id}
                                transaction-id={offer.id} />
                            </li>
                        )
                    }
                </ul>
            </x-utu-root>
        </div>
    )
}