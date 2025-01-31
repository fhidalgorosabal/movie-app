import { Card } from '../Card';
import { DataListProps } from '../../utils/types';
import ReactLoading from 'react-loading';
import './styles.scss';	

export const DataList = (props: DataListProps) => {  

    return (
        <>  
            { props.loading 
                ?   <div className='loading-container'>
                        <ReactLoading type="spin" color='#cea811' height={'5%'} width={'5%'}/>
                    </div>
                :   <ul className="data-list">
                        {   
                            props.dataList.map((data) => (
                                <Card key={data.id} data={data}/>
                            ))
                        }
                    </ul>
            }            
        </>
    );
};