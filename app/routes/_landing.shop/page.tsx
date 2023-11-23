import styles from './styles/styles.module.css';
import Category from './components/category';
import {useSearchParams} from '@remix-run/react';
import {useEffect} from 'react';

const ShopPage = (props) => {
  let {collections} = props;
  const [searchParams] = useSearchParams();

  useEffect(() => {
    let category =
      searchParams.get('Category') || searchParams.get('category')!;
    category = category?.toLocaleLowerCase();
    const categorySection = document.getElementById(category!);
    categorySection?.scrollIntoView(true);
  }, [searchParams]);

  return (
    <main className={styles.page}>
      {collections.map((category) => (
        <Category key={category.node.title} category={category.node} />
      ))}
    </main>
  );
};

export default ShopPage;
