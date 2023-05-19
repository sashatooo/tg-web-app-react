import Button from "../Button/Button"
import './ProductItem.css'

const ProductItem = (props) => {

    const onAddHendler = () => {
        props.onAdd(props.product)
    }

    return (
        <div className={ 'product ' + props.className }>
            <div className={'img'} />
            <div className={'title'}>{ props.product.title }</div>
            <div className={'discription'}>{ props.product.discription }</div>
            <div className={'price'}>
                <span>
                    стоимость:
                    <b>{ props.product.price }</b>
                </span>
            </div>
            <Button className={'add-btn'} onClick={ onAddHendler }>
                добавить в корзину
            </Button>
        </div>
    )
}

export default ProductItem