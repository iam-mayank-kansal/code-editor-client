import { CodeInterface } from '@/utils/interface';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
    ssr: false,
});

export default function Code({ language, code, setCode }: CodeInterface) {
    return (
        <div className="bg-white p-1 h-full -translate-x-5">
            <MonacoEditor
                height="610px"
                language={language}
                value={code}
                defaultValue={code}
                onChange={(value) => setCode(value || '')}
            />
        </div>
    )
}