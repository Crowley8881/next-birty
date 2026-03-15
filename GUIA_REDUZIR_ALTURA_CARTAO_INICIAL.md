# Guia: Como Reduzir a Altura do Cartão Inicial

Este guia mostra **exatamente onde** você pode reduzir apenas a **altura do cartão inicial** (a capa com o presente).

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

## 📊 OPÇÕES DE ALTURA

Atualmente o cartão inicial tem **90vh** (90% da altura da tela).

Aqui estão as opções para reduzir:

| Altura | Descrição |
|--------|-----------|
| `90vh` | Tamanho atual (muito grande) |
| `80vh` | -10% (recomendado para reduzir um pouco) |
| `75vh` | -15% (redução moderada) |
| `70vh` | -20% (redução significativa) |
| `65vh` | -25% (bem menor) |
| `60vh` | -30% (pequeno) |

---

## ✏️ COMO FAZER A ALTERAÇÃO

### PASSO 1: Abra o arquivo
Abra `src/app/page.tsx`

### PASSO 2: Encontre a linha (por volta de 93)
```typescript
<div className="relative w-full max-w-2xl mx-auto" style={{ height: '90vh' }}>
```

### PASSO 3: Mude o valor

**ANTES:**
```typescript
style={{ height: '90vh' }}
```

**DEPOIS (escolha uma opção):**

**Opção 1 - Redução pequena (recomendado):**
```typescript
style={{ height: '80vh' }}
```

**Opção 2 - Redução moderada:**
```typescript
style={{ height: '75vh' }}
```

**Opção 3 - Redução grande:**
```typescript
style={{ height: '70vh' }}
```

### PASSO 4: Salve o arquivo
Pressione `Ctrl+S` (ou `Cmd+S` no Mac)

### PASSO 5: Veja a mudança
O navegador vai atualizar automaticamente e o cartão vai ficar menor!

---

## 🎯 RECOMENDAÇÃO

Se o cartão está "pouco grande", recomendo:
- Mude de `90vh` para **`80vh`** (redução de 10%)

Se quiser ainda menor:
- Mude para **`75vh`** (redução de 15%)

---

## 🔎 DICA: ENCONTRAR RÁPIDO

**No VS Code ou editor de código:**
1. Pressione `Ctrl+F` (ou `Cmd+F` no Mac)
2. Digite: `height: '90vh'`
3. Ele vai destacar a linha automaticamente
4. Mude o valor para o que você quer

---

## 📍 LOCALIZAÇÃO VISUAL NO CÓDIGO

```typescript
// Linha 85-93 (aproximadamente)
{!isOpen && (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.5 }}
    onClick={() => setIsOpen(true)}
    className="cursor-pointer"
  >
    <div className="relative w-full max-w-2xl mx-auto" style={{ height: '90vh' }}>
                                                                    ↑↑↑↑↑
                                                        MUDE ESTE VALOR AQUI
```

---

## ✅ EXEMPLO COMPLETO

Se você quer reduzir para `80vh`, a linha fica assim:

```typescript
<div className="relative w-full max-w-2xl mx-auto" style={{ height: '80vh' }}>
```

Pronto! 🎉

---

## 💡 DICA: Testar Diferentes Tamanhos

Você pode experimentar diferentes valores:
- `85vh` - pequena redução
- `80vh` - redução moderada
- `75vh` - redução significativa
- `70vh` - bem menor

Salve o arquivo e veja qual fica melhor para sua cliente!

---

## 🆘 TROUBLESHOOTING

### O cartão não ficou menor
- Certifique-se de que salvou o arquivo (Ctrl+S)
- Recarregue a página (Ctrl+F5 ou Cmd+Shift+R)
- Verifique se está editando o arquivo correto: `src/app/page.tsx`

### Não encontro a linha
- Use Ctrl+F para procurar por `height: '90vh'`
- Certifique-se de estar no arquivo `page.tsx` (não em outro arquivo)

---

**Pronto! Agora você sabe como reduzir a altura do cartão inicial!** 🚀
