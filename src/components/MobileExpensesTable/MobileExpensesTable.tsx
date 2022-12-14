import './styles.module.css'
import { Expense } from '../../types/expense'
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'
import getCategoryIcon from '../../helpers/getCategoryIcon'
type Props = {
    list: Expense[] 
}

export const MobileExpensesTable = ({list}: {list: Expense[]}) => {
    return(
        <>
            {
                list.map((expense, index) =>(
                    <div key={index} className='table h-5rem border d-flex'>
                        <div className='w-25 h-100 d-flex justify-content-center align-items-center'>
                            <div style={{backgroundColor: `${categories[expense.category].bgColor}`}} className='w-75 h-75 rounded d-flex justify-content-center align-items-center'>
                                {getCategoryIcon((categories[expense.category].categoryId))}
                            </div>
                        </div>
                        <div className='w-50 d-flex flex-column justify-content-center'>
                            <div style={{fontWeight: '600'}} className='w-100'>{expense.title}</div>
                            <div className='w-100'>{formatDate(expense.date)}</div>
                        </div>
                        <div className='w-25 d-flex justify-content-center align-items-center'><p><strong>{categories[expense.category].expense ? '-' : ''}U$$ {expense.value}</strong></p></div>
                    </div>
                ))
            }
        </>
    )
}