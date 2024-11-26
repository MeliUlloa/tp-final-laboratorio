import React, { useState, useEffect } from 'react';
import StoreHeader from '../../components/StoreHeader/StoreHeader';
import FilterContainer from '../../components/FilterContainer/FilterContainer';
import ProductGrid from '../../components/Product/ProductGrid';
import ProductList from '../../components/Product/ProductList';
import ProductModal from '../../components/modals/product/ProductModal';
import { getProductsByType } from '../../services/ProductService';
import { ToastContainer, toast } from 'react-toastify';
import ProductNotification from '../../components/Notification/ProductNotification';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

const Store = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isGridView, setIsGridView] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeTab, setActiveTab] = useState('Muestras médicas');
    const [notification, setNotification] = useState(null);
    const dispatch = useDispatch();
    const addedProducts = useSelector(state => state.cart.cartItems.map(item => item.id));

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const tipo = activeTab === 'Muestras médicas' ? 'ZFMM' : 'ZFMP';
                const products = await getProductsByType({ tipo });
                setProducts(products);
            } catch (error) {
                setError('Error al obtener los productos');
                console.error(error);
            }
        };

        fetchProducts();
    }, [activeTab]);

    const handleSearchSubmit = async (e) => {
        e.preventDefault();
        try {
            const tipo = activeTab === 'Muestras médicas' ? 'ZFMM' : 'ZFMP';
            const filteredProducts = await getProductsByType({
                tipo,
                search: searchTerm,
                idEspecialidad: selectedSpecialty
            });
            setProducts(filteredProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleViewChange = (view) => {
        setIsGridView(view);
    };

    const handleFilterChange = (specialtyId, specialtyName) => {
        setSelectedSpecialty(specialtyId);
        setSearchTerm(specialtyName);
        handleSearchSubmit({ preventDefault: () => { } });
    };

    const handleSearchTermChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value === '') {
            setSelectedSpecialty('');
        }
    };

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleAddProduct = (product) => {
        const showNotification = ProductNotification({ product });
        showNotification();

        if (addedProducts.includes(product.id)) {
            dispatch(removeFromCart(product.id));
        } else {
            dispatch(addToCart(product));
        }
    };

    const productscart = useSelector(state => state.cart.cartItems);

    return (
        <div className="body-config body-tienda">
            <StoreHeader labLogo={'/path-to-your-logo.png'} cartItemsCount={productscart.length} />
            <main className="main-tienda">
                <div className="tabs-container d-flex flex-row">
                    <a href="#" className={`tab f-s-16 m-0 inter-regular ${activeTab === 'Muestras médicas' ? 'active' : ''}`} onClick={() => handleTabClick('Muestras médicas')}>
                        <span className="on"></span> Muestras médicas
                    </a>
                    <a href="#" className={`tab f-s-16 m-0 inter-regular ${activeTab === 'Material promocional' ? 'active' : ''}`} onClick={() => handleTabClick('Material promocional')}>
                        Material promocional
                    </a>
                </div>
                <div className="search-container d-flex flex-column w-100 p-s-1 p-e-1">
                    <form autoComplete="off" action="" className="d-flex w-100" onSubmit={handleSearchSubmit}>
                        <div className="autocomplete text-field-size-lg d-flex flex-row gap-1 a-items-center w-100">
                            <label htmlFor="mySearch" className="c-616161 f-s-16 inter-regular">Buscar</label>
                            <input
                                type="search"
                                id="mySearch"
                                placeholder="Ingrese un producto o especialidad"
                                title="Ingrese un producto o especialidad"
                                className="input-search-style p-1 b-r-2 inter-regular f-s-16 c-616161"
                                value={searchTerm}
                                onChange={handleSearchTermChange}
                            />
                            <button type="submit" id="submit" className="input-submit-search style icon icon__search"></button>
                        </div>
                    </form>
                </div>

                <FilterContainer
                    onViewChange={handleViewChange}
                    onFilterChange={(id, name) => handleFilterChange(id, name)}
                />

                {error && <div className="error-message">{error}</div>}
                {isGridView ? (
                    <ProductGrid
                        products={products}
                        error={error}
                        onAddProduct={handleAddProduct}
                        addedProducts={addedProducts}
                    />
                ) : (
                    <ProductList
                        products={products}
                        error={error}
                        showDetailButton={true}
                        onProductDetailClick={handleOpenModal}
                        onAddProduct={handleAddProduct}
                        addedProducts={addedProducts}
                    />
                )}

                {selectedProduct && (
                    <ProductModal
                        isOpen={isModalOpen}
                        product={selectedProduct}
                        onClose={handleCloseModal}
                    />
                )}

                {/* Mostrar notificación de producto agregado */}
                {notification && (
                    <div className="notification-popup">
                        {notification}
                    </div>
                )}
                <ToastContainer />
            </main>
        </div>
    );
};

export default Store;
