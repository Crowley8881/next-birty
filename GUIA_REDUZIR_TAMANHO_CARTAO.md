# Guia: Como Reduzir o Tamanho do Cartão em 15%

Este guia mostra **exatamente onde** você pode reduzir o tamanho do cartão no código.

---

## 📍 LOCAL EXATO NO CÓDIGO

**Arquivo:** `src/app/page.tsx`  
**Linha:** 93

---

## 🔍 ENCONTRE ESTA LINHA

Abra o arquivo `src/app/page.tsx` e procure por:

```typescript
<div className="relative w-full max-w-2xl mx-auto" style={{ height: '90vh' }}>
```

Esta linha está por volta da **linha 93**.

---

## 📊 CÁLCULO DE REDUÇÃO

Atualmente o cartão tem **90vh** de altura.

Para reduzir em **15%**:
- 90vh × 15% = 13.5vh
- 90vh - 13.5vh = **76.5vh** ✅

---

## ✏️ COMO FAZER A ALTERAÇÃO

### ANTES (Tamanho atual):
```typescript
<div className="relative w-full max-w-2xl mx-auto" style={{ height: '90vh' }}>
```

### DEPOIS (Reduzido em 15%):
```typescript
<div className="relative w-full max-w-2xl mx-auto" style={{ height: '76.5vh' }}>
```

---

## 📝 PASSO A PASSO

1. **Abra o arquivo** `src/app/page.tsx`
2. **Vá para a linha 93** (ou use Ctrl+G para ir para linha)
3. **Encontre:** `height: '90vh'`
4. **Mude para:** `height: '76.5vh'`
5. **Salve o arquivo** (Ctrl+S)
6. **O navegador vai atualizar automaticamente**

---

## 🎯 OUTRAS OPÇÕES DE ALTURA

Se quiser experimentar outros tamanhos:

| Percentual | Altura | Descrição |
|-----------|--------|-----------|
| 100% | `100vh` | Tela cheia |
| 90% | `90vh` | Tamanho atual |
| **76.5%** | **`76.5vh`** | **-15% (recomendado)** |
| 75% | `75vh` | Anterior |
| 70% | `70vh` | Bem menor |
| 60% | `60vh` | Pequeno |

---

## 🔎 DICA: ENCONTRAR RÁPIDO

**No VS Code:**
1. Pressione `Ctrl+F` (ou `Cmd+F` no Mac)
2. Digite: `height: '90vh'`
3. Ele vai destacar a linha automaticamente
4. Mude para `height: '76.5vh'`

---

## ✅ PRONTO!

Depois que você salvar o arquivo, o cartão vai ficar **15% menor** automaticamente! 🎉

Se quiser fazer mais ajustes, é só mudar o valor de `76.5vh` para outro número.

---

## 💡 DICA BÔNUS: Outras Formas de Reduzir

Se quiser reduzir o cartão de outras formas:

### Opção 1: Reduzir a largura também
Procure por `max-w-2xl` (linha 93) e mude para:
- `max-w-xl` - mais estreito
- `max-w-lg` - ainda mais estreito

### Opção 2: Reduzir o padding interno
Procure por `p-8` (linha 100) e mude para:
- `p-6` - menos espaço interno
- `p-4` - ainda menos

### Opção 3: Reduzir o tamanho do emoji
Procure por `text-7xl` (linha 200) e mude para:
- `text-6xl` - menor
- `text-5xl` - bem menor

---

**Qualquer dúvida, é só chamar!** 🚀
