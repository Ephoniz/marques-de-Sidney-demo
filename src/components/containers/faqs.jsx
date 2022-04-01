import React, { useState } from 'react';
import preguntas from '../../preguntas';
import SingleQuestion from './question';
import '../../styles/faqs_style.scss';

const Faqs = () => {
    const [questions, setQuestions] = useState(preguntas);
    return (
        <main>
        <div className='container'>
            <h3>literalmente FAQS</h3>
            <section className='info'>
            {questions.map((question) => {
                return (
                <SingleQuestion key={question.id} {...question}></SingleQuestion>
                );
            })}
            </section>
        </div>
        </main>
    );
}

export default Faqs;
