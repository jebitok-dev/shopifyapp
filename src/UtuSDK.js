import '@ututrust/web-components';
export default function UtuSDK () {
  return (
    <div>
        <x-utu-root api-key=''>
            <ul>
                {
                    offersId => 
                    <li>
                        <x-utu-recommendation target-uuid={offerId} />
                    </li>
                }
            </ul>
        </x-utu-root>
    </div>
  )
}

