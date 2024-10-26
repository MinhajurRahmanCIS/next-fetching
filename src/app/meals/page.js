import Search from '@/components/Shared/Search/Search';
import styles from  './styles.modules.css';

export const metadata = {
    title: {
        absolute: "Meals"
    },
    description: "Meals Page",
  };

const page = () => {
    return (
        <div className="p-12">
            <h1 className="text-4xl font-bold text-center mb-10">Choose your Favorite Meals</h1>
            <Search/>
            <span className="btn-ok">Ok</span>
        </div>
    );
};

export default page;