from langchain.document_loaders import PyPDFLoader, DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings import HuggingFaceEmbeddings
from typing import List
from langchain.schema import Document

#Extract text from pdf files
def load_pdf_files(data_path):
    loader = DirectoryLoader(
        data_path,
        glob="*.pdf",
        loader_cls=PyPDFLoader
    )

    documents = loader.load()
    return documents

def filter_to_simplify_docs(docs: List[Document]) -> List[Document]:
    """
    Only keep metadata 'source' and original page_content
    """
    simp_docs: List[Documeent] = []
    for doc in docs:
        src = doc.metadata.get("source")
        simp_docs.append(
            Document(
                page_content=doc.page_content,
                metadata={"source": src},
            )
        )
    return simp_docs

#split documents into smaller chunks
def text_split(docs):
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=20,
        length_function=len
    )
    texts_chunk = text_splitter.split_documents(docs)
    return texts_chunk

def get_embeddings_model():
    """
    Return HuggingFace embedddings model.
    """
    model_name = "sentence-transformers/all-MiniLM-L6-v2"
    embeddings = HuggingFaceEmbeddings(
        model_name=model_name,
    )
    return embeddings